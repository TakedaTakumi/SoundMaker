import ffmpeg from 'fluent-ffmpeg';

async function convertWAVtoMP3(input: string, output: string) {
	await ffmpeg(input)
		.toFormat('mp3')
		.on('end', () => {
			console.log('変換完了');
		})
		.save(output);
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
