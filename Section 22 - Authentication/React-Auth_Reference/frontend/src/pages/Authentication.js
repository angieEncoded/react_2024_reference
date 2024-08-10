import AuthForm from '../components/AuthForm';
import { json , redirect} from 'react-router-dom';


function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}) {

  // Grab data from the search params using the browser's built in URL function
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login'

  // throw an error with 422 invalid user input
  if (mode !== 'login' && mode !== 'signup') {
    throw json({message: 'Unsupported mode.'}, { status: 422 });
  }

  // Get the authentication data from the form
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  };

  // Send a fetch request with the necessary data to do the work
  const response =  await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(authData)
  });

  if(response.status === 422 || response.status === 401) {
    return response; // react router will automatically extract the data for us
  }

  if(!response.ok) {
    throw json({message: "Could not authenticate user" }, {status: 500});
  }


  const responseData = await response.json();
  const token = responseData.token;

  // we can store this in the local storage
  localStorage.setItem('token', token);
  return redirect('/')

}