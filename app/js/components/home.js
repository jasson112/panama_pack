/*
let socket = null;
document.addEventListener('DOMContentLoaded', () => {
  // code...
  socket = new WebSocket(`ws://${document.domain}:1234`);

  socket.onopen = () => {
  };

  socket.onmessage = (message) => {
    const txt = message.data;
    console.log('MESSAGE DATA', txt);
  };
  if (document.getElementById('add_order')) {
    document.getElementById('add_order').addEventListener('click', () => {
      socket.send(
        JSON.stringify({
          name: 'jasson rojas',
          address: 'cra 70 f # 79 42',
          items: [
            {
              name: 'Kitten',
              icon: 'http://placekitten.com/50/50',
              price: '55000',
            },
          ],
          total: '55000',
        }),
      );
    });
  }
});
*/
