const newFormHandler = async (event) => {
    event.preventDefault();
    // need to come back and mess with selectors
    const text = document.querySelector('#name-signup').value.trim();
    const project_id = document.querySelector('#email-signup').value.trim();
  
    if (text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        // assistance received from Mitchell Robbins on getting this to work right
        body: JSON.stringify({ project_id, text }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  //need to add params
  document.querySelector('').addEventListener(,newFormHandler)