import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';

function convertWAVtoMP3(input: string, output: string): Promise<void> {
	return new Promise((resolve) => {
		ffmpeg(input)
			.toFormat('mp3')
			.on('end', () => {
				console.log('変換完了');
				resolve();
			})
			.save(output);
	});
}

export async function convertScaleFiles() {
	await convertWAVtoMP3('dest/C_MAJOR.wav', 'dest/C_MAJOR.mp3');
	await convertWAVtoMP3('dest/D_FLAT_MAJOR.wav', 'dest/D_FLAT_MAJOR.mp3');
	await convertWAVtoMP3('dest/D_MAJOR.wav', 'dest/D_MAJOR.mp3');
	await convertWAVtoMP3('dest/E_FLAT_MAJOR.wav', 'dest/E_FLAT_MAJOR.mp3');
	await convertWAVtoMP3('dest/E_MAJOR.wav', 'dest/E_MAJOR.mp3');
	await convertWAVtoMP3('dest/F_MAJOR.wav', 'dest/F_MAJOR.mp3');
	await convertWAVtoMP3('dest/G_FLAT_MAJOR.wav', 'dest/G_FLAT_MAJOR.mp3');
	await convertWAVtoMP3('dest/G_MAJOR.wav', 'dest/G_MAJOR.mp3');
	await convertWAVtoMP3('dest/A_FLAT_MINOR.wav', 'dest/A_FLAT_MINOR.mp3');
	await convertWAVtoMP3('dest/A_MINOR.wav', 'dest/A_MINOR.mp3');
	await convertWAVtoMP3('dest/B_FLAT_MINOR.wav', 'dest/B_FLAT_MINOR.mp3');
	await convertWAVtoMP3('dest/B_MINOR.wav', 'dest/B_MINOR.mp3');
	await convertWAVtoMP3('dest/C_MINOR.wav', 'dest/C_MINOR.mp3');
}

export function convertToBase64() {
	// WAV
	fs.writeFileSync(
		'dest/C_MAJOR.wav.base64.txt',
		`data:audio/wav;base64,${fs.readFileSync('dest/C_MAJOR.wav', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/D_FLAT_MAJOR.wav.base64.txt',
		`data:audio/wav;base64,${fs.readFileSync('dest/D_FLAT_MAJOR.wav', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/D_MAJOR.wav.base64.txt',
		`data:audio/wav;base64,${fs.readFileSync('dest/D_MAJOR.wav', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/E_FLAT_MAJOR.wav.base64.txt',
		`data:audio/wav;base64,${fs.readFileSync('dest/E_FLAT_MAJOR.wav', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/E_MAJOR.wav.base64.txt',
		`data:audio/wav;base64,${fs.readFileSync('dest/E_MAJOR.wav', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/F_MAJOR.wav.base64.txt',
		`data:audio/wav;base64,${fs.readFileSync('dest/F_MAJOR.wav', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/G_FLAT_MAJOR.wav.base64.txt',
		`data:audio/wav;base64,${fs.readFileSync('dest/G_FLAT_MAJOR.wav', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/G_MAJOR.wav.base64.txt',
		`data:audio/wav;base64,${fs.readFileSync('dest/G_MAJOR.wav', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/A_FLAT_MINOR.wav.base64.txt',
		`data:audio/wav;base64,${fs.readFileSync('dest/A_FLAT_MINOR.wav', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/A_MINOR.wav.base64.txt',
		`data:audio/wav;base64,${fs.readFileSync('dest/A_MINOR.wav', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/B_FLAT_MINOR.wav.base64.txt',
		`data:audio/wav;base64,${fs.readFileSync('dest/B_FLAT_MINOR.wav', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/B_MINOR.wav.base64.txt',
		`data:audio/wav;base64,${fs.readFileSync('dest/B_MINOR.wav', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/C_MINOR.wav.base64.txt',
		`data:audio/wav;base64,${fs.readFileSync('dest/C_MINOR.wav', { encoding: 'base64url' })}`
	);

	// MP3
	fs.writeFileSync(
		'dest/C_MAJOR.mp3.base64.txt',
		`data:audio/mpeg;base64,${fs.readFileSync('dest/C_MAJOR.mp3', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/D_FLAT_MAJOR.mp3.base64.txt',
		`data:audio/mpeg;base64,${fs.readFileSync('dest/D_FLAT_MAJOR.mp3', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/D_MAJOR.mp3.base64.txt',
		`data:audio/mpeg;base64,${fs.readFileSync('dest/D_MAJOR.mp3', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/E_FLAT_MAJOR.mp3.base64.txt',
		`data:audio/mpeg;base64,${fs.readFileSync('dest/E_FLAT_MAJOR.mp3', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/E_MAJOR.mp3.base64.txt',
		`data:audio/mpeg;base64,${fs.readFileSync('dest/E_MAJOR.mp3', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/F_MAJOR.mp3.base64.txt',
		`data:audio/mpeg;base64,${fs.readFileSync('dest/F_MAJOR.mp3', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/G_FLAT_MAJOR.mp3.base64.txt',
		`data:audio/mpeg;base64,${fs.readFileSync('dest/G_FLAT_MAJOR.mp3', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/G_MAJOR.mp3.base64.txt',
		`data:audio/mpeg;base64,${fs.readFileSync('dest/G_MAJOR.mp3', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/A_FLAT_MINOR.mp3.base64.txt',
		`data:audio/mpeg;base64,${fs.readFileSync('dest/A_FLAT_MINOR.mp3', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/A_MINOR.mp3.base64.txt',
		`data:audio/mpeg;base64,${fs.readFileSync('dest/A_MINOR.mp3', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/B_FLAT_MINOR.mp3.base64.txt',
		`data:audio/mpeg;base64,${fs.readFileSync('dest/B_FLAT_MINOR.mp3', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/B_MINOR.mp3.base64.txt',
		`data:audio/mpeg;base64,${fs.readFileSync('dest/B_MINOR.mp3', { encoding: 'base64url' })}`
	);
	fs.writeFileSync(
		'dest/C_MINOR.mp3.base64.txt',
		`data:audio/mpeg;base64,${fs.readFileSync('dest/C_MINOR.mp3', { encoding: 'base64url' })}`
	);
}
