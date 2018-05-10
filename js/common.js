(function () {

    var app = {

        initialize : function () {
            this.setUpListenners();
        },

        setUpListenners: function() {
            $('form').on('submit', app.submitForm);
            $('form').on('keydown', 'input', app.removeError);
        },

        submitForm: function (e) {
            e.preventDefault();

            var form = $(this);




            if ( app.validateForm(form) === false ) return false;

            console.log('go in ajax');
        },

           /// app:validateForm(form['email']) === true,


        validateForm: function (form) {
            var inputs = form.find('input');
            valid = true;

            inputs.tooltip('destroy');

            $.each(inputs, function (index, val) {
                var input = $(val),
                    val = input.val(),
                    formGroup = input.parents('input-group'),
                    placeholder = formGroup.find('placeholder').text().toLowerCase(),
                    textError = 'Fill in the this field ' + placeholder;
                if(val.length === 0){
                    formGroup.addClass('has-error').removeClass('has-success');
                    input.tooltip({
                        trigger: 'manual',
                        placement: 'right',
                        title: textError
                    }).tooltip('show');
                    valid = false;
                }else{
                    formGroup.addClass('has-success').removeClass('has-error');
                }

            });

            return valid;

        },
        
        removeError: function () {
            $(this).tooltip('destroy').parents('input-group').removeClass('has-error')
        }

    }

    app.initialize();
}());