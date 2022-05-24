const words = [
	'immunoelectrophoretically',
	'rotavator',
	'tsktsk',
	'psychophysicotherapeutics',
	'squirrelled',
	'crypt',
	'uncopyrightable',
	'cysts',
	'pseudopseudohypoparathyroidism',
	'unimaginatively'
];

words.some(function(word){
	return word.length > 25;
});

words.some(function(word){
	return word.indexOf('right') !== -1;
});

words.every(function(word){
	return word.indexOf('right') !== -1;
});

words.every(function(word){
	return word.length > 1;
});

const btn = document.getElementById('submit');
btn.addEventListener('click', function(e){
	const checkboxes = document.getElementsByName('checkbox');
	const allChecked = Array.from(checkboxes).every(function(checkbox){
		return checkbox.checked;
	});
	if (!allChecked){
		alert("PLEASE CHECK ALL BOXES");
	}
	console.log(allChecked);
})
