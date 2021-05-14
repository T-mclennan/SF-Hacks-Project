export const publishPost = ({email, vid, pid}) => {

  let request = new XMLHttpRequest()
  const username = email.substring(0,email.indexOf('@'))
  const baseURL = window.location.protocol + "//" + window.location.host + "/";
  // const baseURL = 'https://colab-sfhacks-firebase.firebaseapp.com/'

  console.log(`${baseURL}contact/`)
  console.log(`${baseURL}delete/${vid}`)
  console.log(`${baseURL}edit/${vid}`)

  request.onreadystatechange = function() {
    if (this.readyState === 4) {
      console.log(this.status)
      console.log(this.responseText)
    }
  }

  request.open("POST", "https://events-api.notivize.com/applications/2301f026-5707-4228-ba47-0648e983134e/event_flows/acd447b1-5d31-4825-9437-867a4776ac3a/events", true)
  request.setRequestHeader("Content-Type", "application/json")
  request.setRequestHeader("Authorization", "Bearer ab23fd7a-461c-4f24-a5dd-300078ccf821")
  request.send(JSON.stringify({
    'email': email,
    // 'contact_link': `${baseURL}contact/`,
    'contact_link': 'https://colab-sfhacks-firebase.firebaseapp.com/contact/',
    'delete_link': `${baseURL}delete?ver=${vid}`,
    'edit_link': `${baseURL}edit?ver=${vid}`,
    'first_name': username,
    'lifecycle_stage': 'create',
    'unique_id': pid
  }))
}