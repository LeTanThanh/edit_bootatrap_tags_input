$(document).on('ready', function() {
	$(document).on('click', '.tag', function() {
		var tagsInput = $('input[data-role="tagsinput"]');
		var valuesStr = tagsInput.val();
		var values = valuesStr.split(',');

		var bootstrapTagsInput = $('.bootstrap-tagsinput');
		var input = bootstrapTagsInput.find('input');
		var index = bootstrapTagsInput.children().index($(this));
		value = values[index];

		var htmlStr = 	'<span class="tag label label-info" id="js-edit-container">' + 
							'<input type="text" class="form-control" id="js-edit-input" style="background-color: white">' + 
						'</span>'
		$(this).after(htmlStr);
		$(this).hide();
		input.hide();

		var editContainer = $('#js-edit-container');
		var editInput = $('#js-edit-input');
		editContainer.data('value', value);
		editInput.val(value);
		editInput.focus();
	});

	$(document).on('focusout', '#js-edit-input', function() {
		var bootstrapTagsInput = $('.bootstrap-tagsinput');
		var editContainer = $('#js-edit-container');
		var tags = bootstrapTagsInput.children();
		var index = tags.index(editContainer);

		var tagsInput = $('input[data-role="tagsinput"]');
		var values = tagsInput.val().split(',');

		var value = $(this).val();
		var defaultValue = editContainer.data('value');
		var value = value || defaultValue;

		var input = bootstrapTagsInput.find('input');

		editContainer.remove();
    	values[index - 1] = value;
    	tagsInput.tagsinput('removeAll');

    	for (var i = 0; i < values.length; i++) {
	      	tagsInput.tagsinput('add', values[i]);
	    }

    	input.show();
    	input.focus();
	});
});
