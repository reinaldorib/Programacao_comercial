function minhaFuncao1()
{
    $('#area-01').css({
        color:'#ff000',
        textTransform:'uppercase',
        width: '70%'
    });
};

function minhaFuncao2()
{
	$('#area-02').empty();
	var aluno = ['aluno 01','aluno 02','aluno 03','aluno 04','aluno 05'];

	$.each(aluno,function(index, value){
		$('#area-02').append(value);
	});


};

function minhaFuncao3()
{
	$('#area-02').empty();
		var aluno = [
		{
			nome:'aluno 01',
			idade : '22'
		},
		{
			nome:'aluno 02',
			idade : '25'
		},
		{
			nome:'aluno 03',
			idade : '21'
		},
		{
			nome:'aluno 04',
			idade : '24'
		},
		{
			nome:'aluno 05',
			idade : '23'
		},

	];

	for (var i = 0; i <5; i++)
	{
		console.log()aluno[i];
	}

	var list = $('#area-02').append('<ul></ul>').find('ul');
	$.each(aluno, function(index, value){
		list.append('<li>' = value.nome + ' - ' + value.idade + '</li>');
	});
};