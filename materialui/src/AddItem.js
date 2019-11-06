import React, {Component} from 'react';
import SkyLight from 'react-skylight';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddItem extends Component{
    constructor(props){
        super(props);
    }

    addItem = () =>{
        const item = {product: this.state.product, 
                        amount: this.state.amount};
        this.props.addItemToList(item);
        this.addForm.hide();
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }

    render(){
        return(
            <div>
                <section>
                    <Button onClick={()=> this.addForm.show()}
                    variant="contained" color="primary">Add Item</Button>
                </section>
                <SkyLight
                    hideOnOverlayClicked ref={ref=> this.addForm = ref}
                    title = "Add Item">
                    <TextField type="text" name="product" onChange={this.handleChange}
                    placeholder="product"/><br/>
                    <TextField type="text" name="amount"
                    onChange={this.handleChange}
                    placeholder="amount"/><br/>
                    <Button onClick={this.addItem}
                    variant="contained" color="primary">Add</Button>
                </SkyLight>
            </div>
        );
    }
}

export default AddItem;