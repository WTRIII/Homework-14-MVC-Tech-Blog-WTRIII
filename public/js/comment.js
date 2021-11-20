const newFormHandler = async (event) => {
    event.preventDefault();
    const text = document.querySelector('#comment-desc').value.trim();
    const project_id = document.querySelector('#post_id').value.trim();
  
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

  document.querySelector('#comment-btn').addEventListener('submit',newFormHandler)