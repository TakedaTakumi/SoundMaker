import fs from 'fs';
import { RenderingAudioContext as AudioContext } from '@descript/web-audio-js';
const context = new AudioContext();

const HzBase = Math.pow(2, 1 / 12);
const getHz = (semitone: number, octave = 4): number => {
	const _o = (octave - 4) * 12;
	const _s = semitone - 9;
	return 440 * Math.pow(HzBase, _s + _o);
};
const doremi = () => {
	const t0 = context.currentTime;
	let t = 0;

	const oscillator = context.createOscillator();
	const gain = context.createGain();

	oscillator.type = 'square'; //sine, square, sawtooth, triangle, custom
	[0, 2, 4, 5, 7, 9, 11, 12].forEach((s) => {
		const hz = getHz(s);
		oscillator.frequency.setValueAtTime(hz, t0 + t);
		gain.gain.setValueAtTime(0.01, t0 + t);
		t += 1;
	});
	oscillator.start(t0);
	oscillator.stop(t0 + t);
	oscillator.connect(gain, 0, 0);

	gain.connect(context.destination, 0, 0);

	context.processTo(t0 + t);
};

doremi();

const audioData = context.exportAsAudioData();

context.encodeAudioData(audioData, {}).then((arrayBuffer) => {
	fs.writeFile('output.wav', Buffer.from(arrayBuffer), (err) => {
		if (err) throw err;
		console.log('出力しました。');
	});
});
