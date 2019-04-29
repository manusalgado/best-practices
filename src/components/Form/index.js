import React from 'react'
import { FormWrapper } from './styles'

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      fields: {},
      errors: {},
    }

    this.handleValidation = this.handleValidation.bind(this)
  }

  //Validator
  handleValidation() {
    let fields = this.state.fields
    let errors = {}
    let formIsValid = true

    //Name
    if(!fields['name']){
      formIsValid = false
      errors['name'] = 'Cannot be empty'
    }

    if(typeof fields['name']  !== 'undefined' ){
      if(!fields['name'].match(/^[a-zA-Z]+$/)){
        formIsValid = false
        errors['name'] = 'Only letters'

      }
    }

    //Email
    if(!fields['email']){
      formIsValid = false
      errors['email'] = 'Cannot be empty'
    }

    if(typeof fields['email'] !== 'undefined'){
      let lastAtPos = fields['email'].lastIndexOf('@')
      let lastDotPos = fields['email'].lastIndexOf('.')

      if(!(lastAtPos < lastDotPos && lastAtPos > 0 && fields['email'].indexOf('@@') == -1 && lastDotPos > 2 && (fields['email'].length - lastDotPos) > 2)){
        formIsValid = false;
        errors['email'] = 'Email is not valid'
      }
    }

    this.setState({errors})
    return formIsValid
  }

  //Submit form
  contactSubmit(e){
    e.preventDefault();

    if(this.handleValidation()){
       console.log("Form submitted");
    }else{
       console.log("Form has errors.")
    }
  }

  //Update fields
  handleChange(field, e){
    let fields = this.state.fields
    fields[field] = e.target.value        
    this.setState({fields})
  }

  render() {
    return (
      <FormWrapper onChange={this.contactSubmit.bind(this)}>
        <input name='username' type='text' onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
        <input name='email' refs='email' type='text' onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} />
        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
        <button className='btn'>Submit</button>
      </FormWrapper>
    )
  }
}
  
  export default Form;