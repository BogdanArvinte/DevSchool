let xhr;

document
  .querySelector('#ajax')
  .addEventListener('click', startFetch);

axios.get('https://dog.ceo/api/breed/hound/images/random')
  .then(function(result) {
    console.log(result.data.message);
  });

function startFetch(event) {
  event.preventDefault();

  const form = document.querySelector('form');
  const formData = new FormData(); // pass in form or create empty instance
  formData.append('name', 'Unknown');
  formData.append('job', 'Unemployed');

  axios.post('https://reqres.in/api/users', formData);

  const breed = document.querySelector('[name="breed"]').value || 'hound';

  // const promise = new Promise(function(resolve, reject) {
  //   if (window.title === '') {
  //     reject();
  //   }

  //   function customFunction() {
  //     // do something async
  //     setTimeout(function() {
  //       resolve('Finished running');
  //     }, 3000);
  //   }

  //   customFunction();
  // });

  // promise
  //   .then(function(message) {
  //     console.log(message)
  //   })
  //   .catch(function(err) {
  //     console.error(err);
  //   });

  const request = fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(function (response) {
      return response.json();
    }).then(function (json) {
      const ajaxContent = document.querySelector('#ajaxContent');
      ajaxContent.src = json.message;

      return json;
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    });
}

// function startRequest(event) {
//   event.preventDefault();

//   xhr = new XMLHttpRequest();

//   if (!xhr) {
//     alert('Giving up :( Cannot create an XMLHTTP instance');
//     return false;
//   }

//   const breed = document.querySelector('[name="breed"]').value || 'hound';

//   xhr.onreadystatechange = showMeInternet;
//   xhr.open('GET', `https://dog.ceo/api/breed/${breed}/images/random`);
//   xhr.send();
// }

// function showMeInternet() {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     const ajaxContent = document.querySelector('#ajaxContent');
//     ajaxContent.src = '';
//     if (xhr.status === 200) {
//       ajaxContent.src = JSON.parse(xhr.responseText).message;
//     } else {
//       ajaxContent.alt = 'Content not found';
//     }
//   }
// }