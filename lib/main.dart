import 'dart:async';
import 'package:flutter/material.dart';

void main() {
  runApp(const WebtoonViewerApp());
}

class WebtoonViewerApp extends StatelessWidget {
  const WebtoonViewerApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: WebtoonViewer(),
    );
  }
}

enum WebtoonType { barbarian, dday }

class WebtoonViewer extends StatefulWidget {
  const WebtoonViewer({super.key});

  @override
  State<WebtoonViewer> createState() => _WebtoonViewerState();
}

class _WebtoonViewerState extends State<WebtoonViewer>
    with TickerProviderStateMixin {
  WebtoonType currentType = WebtoonType.barbarian;

  int index = 1;
  double interval = 1500;

  Timer? timer;

  int get maxIndex =>
      currentType == WebtoonType.barbarian ? 8 : 6;

  List<String> barbarianImages =
  List.generate(8, (i) => "assets/images/바바리안영애${i + 1}.png");
  List<String> ddayImages =
  List.generate(7, (i) => "assets/images/각자의디데이${i + 1}.png");

  String get currentImagePath {
    if (currentType == WebtoonType.barbarian) {
      return barbarianImages[index - 1];
    } else {
      return ddayImages[index - 1];
    }
  }

  @override
  void initState() {
    super.initState();
    precacheAllImages();
    startTimer();
  }

  void precacheAllImages() {
    Future.microtask(() {
      for (final path in barbarianImages) {
        precacheImage(AssetImage(path), context);
      }
      for (final path in ddayImages) {
        precacheImage(AssetImage(path), context);
      }
    });
  }

  void startTimer() {
    timer?.cancel();
    timer = Timer.periodic(Duration(milliseconds: interval.toInt()), (_) {
      setState(() {
        if (index < maxIndex) {
          index++;
        } else {
          timer?.cancel();
        }
      });
    });
  }

  void restart() {
    setState(() {
      index = 1;
      startTimer();
    });
  }

  @override
  void dispose() {
    timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isFinished = index == maxIndex;

    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: Center(
                child: AnimatedSwitcher(
                  duration: const Duration(milliseconds: 300),
                  switchInCurve: Curves.easeIn,
                  switchOutCurve: Curves.easeOut,
                  transitionBuilder: (child, animation) {
                    return FadeTransition(opacity: animation, child: child);
                  },
                  child: Image.asset(
                    currentImagePath,
                    key: ValueKey(currentImagePath),
                    fit: BoxFit.contain,
                  ),
                ),
              ),
            ),

            const SizedBox(height: 10),

            // 현재 속도
            Text(
              "${interval.toInt()} ms",
              style: const TextStyle(color: Colors.white, fontSize: 18),
            ),

            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Expanded(
                  child: Slider(
                    value: interval,
                    min: 500,
                    max: 3000,
                    divisions: 25,
                    activeColor: Colors.blueAccent,
                    inactiveColor: Colors.white30,
                    onChanged: (v) {
                      setState(() {
                        interval = v;
                        if (!isFinished) startTimer();
                      });
                    },
                  ),
                ),

                // 다시하기 버튼
                if (isFinished)
                  IconButton(
                    onPressed: restart,
                    icon: const Icon(Icons.refresh, color: Colors.white),
                  ),

                const SizedBox(width: 8),

                // 라디오 버튼
                Column(
                  children: [
                    Row(
                      children: [
                        Radio<WebtoonType>(
                          value: WebtoonType.barbarian,
                          groupValue: currentType,
                          fillColor: const WidgetStatePropertyAll(Colors.white),
                          onChanged: (v) {
                            setState(() {
                              currentType = v!;
                              index = 1;
                              startTimer();
                            });
                          },
                        ),
                        const Text("바바리안", style: TextStyle(color: Colors.white)),
                      ],
                    ),

                    Row(
                      children: [
                        Radio<WebtoonType>(
                          value: WebtoonType.dday,
                          groupValue: currentType,
                          fillColor: const WidgetStatePropertyAll(Colors.white),
                          onChanged: (v) {
                            setState(() {
                              currentType = v!;
                              index = 1;
                              startTimer();
                            });
                          },
                        ),
                        const Text("각자의디데이",
                            style: TextStyle(color: Colors.white)),
                      ],
                    ),
                  ],
                ),
              ],
            ),

            const SizedBox(height: 20),
          ],
        ),
      ),
    );
  }
}
