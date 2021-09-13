import React from 'react';
import axios from 'axios';


class UserProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            birthdate: '',
            jobtitle: '',
            experience: '',

            error: "",
            response: ""
        }
    }

    submitForm = async e=>{
        e.preventDefault();

        /* Validating the form */
        this.setState({error: this.state.firstname ? "" : "First Name"});
        if(!this.state.firstname) return;
        this.setState({error: this.state.lastname ? "" : "Last Name"});
        if(!this.state.lastname) return;
        this.setState({error: this.state.email ? "" : "Email Address"});
        if(!this.state.email) return;


        /* Sending an HTTP request */
        const url = "https://dummy.free.beeceptor.com";
        const formData = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            birthdate: this.state.birthdate,
            jobtitle: this.state.jobtitle,
            experience: this.state.experience
        };

        try{
            const response =  await axios.put(url, formData);
            if(response.status === 200){
                this.setState({response: "success"});
            }else{
                this.setState({response: "failed"});
            }
        }catch(e){
            this.setState({response: "failed"});
        }

        /* To remove the message popup */
        setTimeout(()=>{
            this.setState({response: ""});
        }, 2000);

    }

    render() {
      return (
        <div>

            {/* Basicly shows a message of success/failed once the request is being sent */}
            { this.state.response === "success" &&
                (
                    <div className="fixed top-0 left-0 w-full bg-green-400 text-center text-white p-2">
                        Successfully updated the profile</div>
                    || (
                        this.state.response === "failed" &&
                        <div className="fixed top-0 left-0 w-full bg-red-400 text-white text-center p-2">
                            For some reasons, you request did not make it to the server.</div>
                    )
                )
            }


            {/* The actual form for updating the user profile */}
            <form onSubmit={this.submitForm}>
                <div className="flex justify-center py-40 ">
                    <div className="w-96 p-6 max-w-full border border-gray-200 rounded shadow">

                        {this.state.error &&
                            <span className="text-red-500">* Please fill in the {this.state.error} field.</span>
                        }


                        <h1 className="text-3xl font-bold py-4">User Profile</h1>
                        <div className="">
                            <div className="py-2">
                                <input className="form-input" placeholder="First Name"
                                value={this.state.firstname} onChange={e=>this.setState({firstname: e.target.value})} />
                            </div>
                            <div className="py-2">
                                <input className="form-input" placeholder="Last Name"
                                value={this.state.lastname} onChange={e=>this.setState({lastname: e.target.value})} />
                            </div>
                            <div className="py-2">
                                <input className="form-input" placeholder="Email Address" type="email"
                                value={this.state.email} onChange={e=>this.setState({email: e.target.value})} />
                            </div>
                            <div className="py-2">
                                <label className="text-gray-500">Birth Date</label>
                                <input className="form-input" placeholder="Birth Date" type="date"
                                value={this.state.birthdate} onChange={e=>this.setState({birthdate: e.target.value})} />
                            </div>
                            <div className="py-2">
                                <input className="form-input" placeholder="Preferred Job Title"
                                value={this.state.jobtitle} onChange={e=>this.setState({jobtitle: e.target.value})} />
                            </div>
                            <div className="py-2 flex justify-between">
                                <label className="text-gray-500">Years of Experience</label>
                                <select className="form-input"
                                value={this.state.experience} onChange={e=>this.setState({experience: e.target.value})} >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>+6</option>
                                </select>
                            </div>
                        </div>
                        <button className="w-full bg-blue-400 py-2 my-2 text-white rounded shadow" type="submit">Update</button>
                    </div>

                </div>
              </form>
        </div>

      );
    }
}

export default UserProfile;
