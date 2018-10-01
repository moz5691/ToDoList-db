$(function() {
  $('.todo-list-group').on('click', '#delete-btn', function(event) {
    event.preventDefault();
    const id = $(this).attr('data-id');
    // console.log('delete button clicked', id);

    $.ajax({
      url: '/api/delete/' + id,
      method: 'DELETE',
      data: { id: id }
    }).done(function(res) {
      if (res.success) {
        //   console.log('id from ajax call is', res);
        window.location.reload();
      } else {
        console.log('error...ajax');
      }
    });
  });

  $('.todo-list-group').on('change', '#completed-cbx', function(event) {
    event.preventDefault();
    const completedCheck = this.checked;
    const id = $(this).attr('data-id');
    // completedCheck ? console.log('chekced') : console.log('unchekced');
    // console.log('id and checkstatus', id, completedCheck);

    $.ajax({
      url: '/api/update/' + id,
      method: 'PUT',
      data: { completedCheck: completedCheck }
    }).done(function(res) {
      if (res.success) {
        console.log('id from ajax call is', res);
        window.location.reload();
      } else {
        console.log('error...ajax');
      }
    });
  });
});
