class CantoJpMinClass {

	/* An array for each character in the text and its jyutping options */
	toJyutpingArray(text) {
		let chars = text.split(''); // Note: This also separates out Emojis like '🍚' into ['�', '�'] - which can be rejoined later with .join('')

		let array = [];
		for (var i=0; i<chars.length; i++) {
			let char = chars[i];

			// Lookup Jyutping data
			let jp_string = cantojpmin_data[char]; 
			// .

			if (jp_string != undefined) {
				// Split by 1st Delimiter ("/") and 2nd Delimiter (".")
				let jp_array = jp_string.split(/[\/\.]/g);
				array.push({'original':char, 'jyutpings':jp_array});
			} else {
				array.push({'original':char, 'jyutpings':undefined});
			}
		}

		return array;
	}

	/* A simple string based on the 1st jyutping option for each character. (Note: There's no guaranteer that the 1st jyutping option is correct within the given sentence.) */
	toJyutpingString(text) {
		let array = this.toJyutpingArray(text);
		// let words = [];
		let sentence = "";
		for (var i=0; i<array.length; i++) {
			// get the 1st jyutping option for the word
			let word = array[i];
			if (word.jyutpings != undefined) {
				// words.push( word.jyutpings[0] );
				sentence += " " + word.jyutpings[0] + " ";
			} else {
				sentence += word.original;
			}
		}
		sentence = sentence.replace(/\s\s+/g, ' ').trim(); // Replace Double spaces with Single Space
		return sentence;
	}

	/* A shorthand for 'toJyutpingString(text)' */
	toJyutping(text) {
		return this.toJyutpingString(text);
	}

}

var CantoJpMin = new CantoJpMinClass();

// Examples:

// console.log( CantoJpMin.toJyutping('食咗飯未呀?🍚') );
// Result => sik6 zo2 faan6 mei6 aa1 ?🍚

// console.log( CantoJpMin.toJyutpingArray('食咗飯未呀?🍚') );
// Result => [{"original":"食","jyutpings":["sik6","sik2","zi6","ji6"]},{"original":"咗","jyutpings":["zo2"]},{"original":"飯","jyutpings":["faan6","faan2"]},{"original":"未","jyutpings":["mei6"]},{"original":"呀","jyutpings":["aa1","ngaa1","aa3","ngaa3"]},{"original":"?"},{"original":"\ud83c"},{"original":"\udf5a"}]
