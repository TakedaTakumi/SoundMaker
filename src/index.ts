import { convertScaleFiles, convertToBase64 } from './convertFile';
import { makeScaleFile } from './makeSound';

// makeDoremi();
// makeKiraKira();
makeScaleFile().then(() => {
	convertScaleFiles().then(() => {
		convertToBase64();
	});
});
