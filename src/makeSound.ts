import fs from 'fs';
import { RenderingAudioContext as AudioContext } from '@descript/web-audio-js';

//     const base = 440; //ラ=440(442)Hz
//     const d = Math.pow(2, 1 / 12);
//     console.log(base * Math.pow(d, -9)); //ド    C maj
//     console.log(base * Math.pow(d, -8)); //ド#   D♭ maj
//     console.log(base * Math.pow(d, -7)); //レ    D maj
//     console.log(base * Math.pow(d, -6)); //レ#   E♭ maj
//     console.log(base * Math.pow(d, -5)); //ミ    E maj
//     console.log(base * Math.pow(d, -4)); //ファ  F maj
//     console.log(base * Math.pow(d, -3)); //ファ# G♭ maj
//     console.log(base * Math.pow(d, -2)); //ソ    G maj
//     console.log(base * Math.pow(d, -1)); //ソ#   A♭ min
//     console.log(base * Math.pow(d, 0)); // ラ    A min
//     console.log(base * Math.pow(d, 1)); // ラ#   B♭ min
//     console.log(base * Math.pow(d, 2)); // シ    B min
//     console.log(base * Math.pow(d, 3)); // ド    C min

enum KEY_SCALE {
	C_MAJOR = 0,
	D_FLAT_MAJOR,
	D_MAJOR,
	E_FLAT_MAJOR,
	E_MAJOR,
	F_MAJOR,
	G_FLAT_MAJOR,
	G_MAJOR,
	A_FLAT_MINOR,
	A_MINOR,
	B_FLAT_MINOR,
	B_MINOR,
	C_MINOR,
}

const HzBase = Math.pow(2, 1 / 12);
function getHz(semitone: number, octave = 4): number {
	const _o = (octave - 4) * 12;
	const _s = semitone - 9;
	return 440 * Math.pow(HzBase, _s + _o);
}

class HzCode {
	readonly hz: number;
	readonly div: number;
	readonly long: number;

	static make(scale: KEY_SCALE, div: number, long: number): HzCode {
		return new HzCode(scale, div, long);
	}

	private constructor(hzCode: number, div: number, long: number) {
		this.hz = getHz(hzCode);
		this.div = div;
		this.long = long;
	}
}

async function saveFile(ctx: AudioContext, outFileName: string) {
	const audioData = ctx.exportAsAudioData();

	const arrayBuffer = await ctx.encodeAudioData(audioData, {});

	const dir = 'dest';

	if (fs.existsSync(dir) === false) {
		fs.mkdirSync(dir);
	}

	const path = `${dir}/${outFileName}.wav`;
	fs.writeFileSync(path, Buffer.from(arrayBuffer));

	console.log(path, '出力しました。');
}

export function makeDoremi(outFileName = 'doremi') {
	const score = [
		HzCode.make(KEY_SCALE.C_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.D_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.E_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.F_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.G_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.A_MINOR, 4, 1),
		HzCode.make(KEY_SCALE.B_MINOR, 4, 1),
		HzCode.make(KEY_SCALE.C_MINOR, 4, 1),
	];
	const context = new AudioContext();

	playScore(context, score);

	saveFile(context, outFileName);
}

export function playScore(ctx: AudioContext, score: Array<HzCode>) {
	const t0 = ctx.currentTime;
	let t = 0;

	const oscillator = ctx.createOscillator();
	const gain = ctx.createGain();

	oscillator.type = 'square'; //sine, square, sawtooth, triangle, custom
	score.forEach((s) => {
		const hz = s.hz;
		const d = (60 / 80) * (4 / s.div) * s.long; //テンポ80
		oscillator.frequency.setValueAtTime(hz, t0 + t);
		gain.gain.setValueCurveAtTime([0.01, 0.02, 0.02, 0.005], t0 + t, d);
		t += d;
	});
	oscillator.start(t0);
	oscillator.stop(t0 + t);
	oscillator.connect(gain, 0, 0);

	gain.connect(ctx.destination, 0, 0);

	ctx.processTo(t0 + t);

	return;
}

export function makeKiraKira(outFileName = 'kirakira') {
	const score = [
		HzCode.make(KEY_SCALE.C_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.C_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.G_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.G_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.A_MINOR, 4, 1),
		HzCode.make(KEY_SCALE.A_MINOR, 4, 1),
		HzCode.make(KEY_SCALE.G_MAJOR, 4, 2),
		HzCode.make(KEY_SCALE.F_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.F_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.E_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.E_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.D_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.D_MAJOR, 4, 1),
		HzCode.make(KEY_SCALE.C_MAJOR, 4, 2),
	];

	const audioContext = new AudioContext();

	playScore(audioContext, score);

	saveFile(audioContext, outFileName);
}

async function playToSave(score: HzCode[], outFileName: string) {
	const audioContext = new AudioContext();
	playScore(audioContext, score);
	await saveFile(audioContext, outFileName);
}

export async function makeScaleFile() {
	await playToSave([HzCode.make(KEY_SCALE.C_MAJOR, 4, 1)], 'C_MAJOR');
	await playToSave([HzCode.make(KEY_SCALE.D_FLAT_MAJOR, 4, 1)], 'D_FLAT_MAJOR');
	await playToSave([HzCode.make(KEY_SCALE.D_MAJOR, 4, 1)], 'D_MAJOR');
	await playToSave([HzCode.make(KEY_SCALE.E_FLAT_MAJOR, 4, 1)], 'E_FLAT_MAJOR');
	await playToSave([HzCode.make(KEY_SCALE.E_MAJOR, 4, 1)], 'E_MAJOR');
	await playToSave([HzCode.make(KEY_SCALE.F_MAJOR, 4, 1)], 'F_MAJOR');
	await playToSave([HzCode.make(KEY_SCALE.G_FLAT_MAJOR, 4, 1)], 'G_FLAT_MAJOR');
	await playToSave([HzCode.make(KEY_SCALE.G_MAJOR, 4, 1)], 'G_MAJOR');
	await playToSave([HzCode.make(KEY_SCALE.A_FLAT_MINOR, 4, 1)], 'A_FLAT_MINOR');
	await playToSave([HzCode.make(KEY_SCALE.A_MINOR, 4, 1)], 'A_MINOR');
	await playToSave([HzCode.make(KEY_SCALE.B_FLAT_MINOR, 4, 1)], 'B_FLAT_MINOR');
	await playToSave([HzCode.make(KEY_SCALE.B_MINOR, 4, 1)], 'B_MINOR');
	await playToSave([HzCode.make(KEY_SCALE.C_MINOR, 4, 1)], 'C_MINOR');
}
