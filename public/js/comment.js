const newFormHandler = async (event) => {
    event.preventDefault();
    const text = document.querySelector('#comment-desc').value.trim();
    const project_id = document.querySelector('#post_id').value.trim();
    console.log(project_id, text);
    
    if (text) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        // assistance received from Mitchell Robbins on getting this to work
        body: JSON.stringify({ project_id, text }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // document.location.replace('/profile');
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
// Damien Luzzo and Ethan Cho determined that the query selector needed to listen for a class, not a button
  document.querySelector('.new-project-form').addEventListener('submit',newFormHandler)