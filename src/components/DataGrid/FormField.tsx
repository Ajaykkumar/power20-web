import axios from 'axios';
import * as React from 'react';
import Select from 'react-select';

interface IFormFieldProps {
  fieldType: string;
  value: any;
  // keyField: string;
  label: string;
  // handleChange: any;
  fieldName: any;
}

interface IFormFieldState {
  options: any
  value: any;
}

class FormField extends React.Component<IFormFieldProps, IFormFieldState> {
  public component: any;

  public constructor(props: IFormFieldProps) {
    super(props);
    this.component = {
      checkbox: '',
      datetime: '',
      number: '',
      select: '',
      textField: ''
    };
    this.state = {
      options: [],
      value: props.value
    };
  }

  public handleChange = (key: any, value: any) => {
    // tslint:disable-next-line:no-console
    console.log('============value================', value);
    // this.props.handleChange(key, value, keyField);
    this.setState({ value });
  }

  public getField = (fieldType: string , value: any, label: string) => {
    switch (fieldType) {
      case 'textfield':
        return <input className="col-6" name={label} type="text" value={value} onChange={(e: any) => this.handleChange(label, e.target.value)} />;
      case 'checkbox':
        return <input name={label} type="check" value={value} onChange={(e: any) => this.handleChange(label, e.target.value)} />;
      case 'datetime':
        return <input name={label} type="date" value={`${new Date(value).getFullYear()}-${new Date(value).getMonth()}-${new Date(value).getDate()}`} onChange={(e: any) => this.handleChange(label, e.target.value)} />;
      case 'number':
        return <input name={label} type="number" value={value} onChange={(e: any) => this.handleChange(label, e.target.value)} />;
      case 'select':
        // tslint:disable-next-line:no-console
        console.log('============options============', this.state.options);
        return <Select
          value={value}
          onChange={(e: any) => this.handleChange(label, e)}
          onMenuOpen={() => {if (this.state.options.length === 0) {
            axios.get('https://api.myjson.com/bins/sgvxy').then(res => this.setState({options: res.data}));
          }}}
          options={this.state.options}
        />;
      default:
        return <input type="text" value={value} />;
    }
  }

  public render() {
    const {fieldType, label, fieldName} = this.props;
    const { value } = this.state;
    return (
      <div className="row input-wrapper">
        <div className="col-xs-6">{label}</div>
        <div className="col-xs-6">
          {this.getField(fieldType, value, fieldName)}
        </div>
      </div>
    );
  }
}

export default FormField;











