exports.authors = function(req,res){
	res.render('author', {
				Avatar: '/images/Avatar.png',
				Nombre: 'J. Jesus Gonzalez',
				Nacimiento: '1971',
				Nacionalidad: 'Española',
				Hobby: 'Todo lo que exista sobre el mundo digital',
				Profesion: 'Técnico en Electromecánica (Ejerciendo desde 1988)',
				errors: []

	});
};
