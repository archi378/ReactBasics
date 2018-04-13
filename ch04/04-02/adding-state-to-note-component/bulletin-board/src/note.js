import React from 'react'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrash from 'react-icons/lib/fa/trash'
import FaFloppyO from 'react-icons/lib/fa/floppy-o'
class Note extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false
        }
        this.edit=this.edit.bind(this)
        this.remove=this.remove.bind(this)
        this.renderForm= this.renderForm.bind(this)
        this.renderDisplay=this.renderDisplay.bind(this)
        this.save=this.save.bind(this)
    }
    edit(){
        this.setState ({
            editing: true
        })
    }
    remove(){
        alert('remove the content')
    }
    renderForm(){
        return(
        <div className='note'>
               <textArea ref={input => this._newText = input} /> 
                   <button onClick={this.save} id="save"><FaFloppyO /></button> 
            </div>
         )
     }
     save(){
         alert(this._newText.value)
     }
    renderDisplay(){
        return(
            <div className='note'>
                <p>Learn React</p>
                <span>
                   <button onClick={this.edit} id="edit"><FaPencil /></button> 
                   <button onClick={this.remove} id="remove"><FaTrash /></button> 
                </span>
            </div>
        )
    }
    render(){
        if(this.state.editing){
        return(
            this.renderForm()
        )}
        else
        return(
            this.renderDisplay()
        )
    }
}
export default Note