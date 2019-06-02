$(document).ready(function () {
	$("#Ingresar").click(function () {
		AddTask()
	});

	function Empty() {
		return $("#tarea").val().length;
	}

	function AddTask() {
		if (Empty() > 0) {
			CreateList();
		}
	}

	function CreateList() {
		var newTask = $("#tarea").val();
		var newLi = $('<li>' + newTask + '</li>').click(function Complete(){
			$("ul").find("li:contains("+ newTask + ")").addClass("complete");
		});
		$('ul').prepend(newLi); 
		$('#tarea').val('');

		

		var remove = $("<button>x</button>").click(function Delete(){
			$("ul").find("li:contains("+ newTask + ")").remove();
		});
		$("ul").find("li:contains("+ newTask + ")").append(remove);
	}

	$("ul").sortable();

});