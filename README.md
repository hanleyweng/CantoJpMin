# CantoJpMin (廣東話/粵語 - 粵拼 - 縮細)
Cantonese Jyutping Minified

This is a small script to enable Cantonese to Jyutping conversions (also known as 'Cantonese Transliteration' or 'Cantonese Romanization'). The script is optimized for small web apps and static web pages. It does does not require a backend server.


## Info
**All code can be run on the Frontend. No backend servers required.**

- File size: 442 KB
- Unique Characters Covered: 29,144
- Character-Jyutping Pairs: 38,502

## Examples

For a simpistic Cantonese to Jyutping transliteration, use **'toJyutping(…)'**:

_(This uses the first jyutping option for each character)_
```
console.log( CantoJpMin.toJyutping('食咗飯未呀?🍚') );

/* Result => sik6 zo2 faan6 mei6 aa1 ?🍚 */
```

To see more jyutping options, run **'toJyutpingArray(…)'**:
```
console.log( CantoJpMin.toJyutpingArray('食咗飯未呀?🍚') );

/* Result => 
[{"original":"食","jyutpings":["sik6","sik2","zi6","ji6"]},
 {"original":"咗","jyutpings":["zo2"]},
 {"original":"飯","jyutpings":["faan6","faan2"]},
 {"original":"未","jyutpings":["mei6"]},
 {"original":"呀","jyutpings":["aa1","ngaa1","aa3","ngaa3"]},
 {"original":"?"},
 {"original":"\ud83c"},
 {"original":"\udf5a"}] */
```


## Instructions

1. Add the two CantoJpMin js files to your project
```
<script src="scripts/cantojpmin_data.js"></script>
<script src="scripts/cantojpmin_functions.js"></script>
```

2. Run CantoJpMin
```
console.log( CantoJpMin.toJyutping('食咗飯未呀?🍚') );
```

3. Done ✅


## References

The dictionary data comes from the Linguistic Society of Hong Kong (LSHK) (香港語言學學會)'s ['Cantonese Pronunciation List of the Characters for Computers (電腦用漢字粵語拼音表)'](https://github.com/lshk-org/jyutping-table) (accessed on 2020.11.19, last updated 2019.12.28). 

The LSHK list is released under [CC 4.0 License](https://creativecommons.org/licenses/by/4.0/deed.en). All of this code is released under the same license.
