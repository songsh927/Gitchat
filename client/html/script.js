window.onload = function() {
    for (var i=0; i<12; i++){
        var wrap = document.createElement('div');
        wrap.className = 'message_wrap';

        var message = document.createElement('div');
        message.className = 'message';

        var span = document.createElement('span');
        span.innerHTML = 'hi this is testing';

        message.append(span);
        wrap.append(message);
          $('#messages').append(wrap);
        }
}