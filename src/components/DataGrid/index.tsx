import Axios from 'axios';
import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Edit as EditIcon, Plus as PlusIcon } from 'react-feather';
import EditGridModal from './EditGridModal';

import './DataGrid.css';

interface IReactFormState {
  data: any;
  schema: any;
  openModal: boolean;
  fieldValues: object;
  isEdit: boolean;
}

class ReactForm extends React.Component<{}, IReactFormState> {
  public state: IReactFormState;

  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      fieldValues: {},
      isEdit: false,
      openModal: false,
      schema: []
    };
  }

  public componentDidMount() {
    Axios.get('http://demo8502818.mockable.io/data').then(
      (response: any) => {
        this.setState({
          data: response.data
        });
      }).catch((e: any) => {
        // tslint:disable-next-line:no-console
        console.log(e);
      });
      Axios.get('http://demo7355785.mockable.io//qwerty1').then(
      (response: any) => {
        this.setState({
          schema: response.data.components[1].components[0].components
        });
      }).catch((e: any) => {
        // tslint:disable-next-line:no-console
        console.log(e);
      });
  }

  public editRow = (values: any) => {
    this.setState({
      fieldValues: values,
      isEdit: true,
      openModal: true
    });
  }

  public addNew = (values: any) => {
    this.setState({
      isEdit: false,
      openModal: true
    });
  }

  public generateTableHeader = (schema: any) => (
    <thead>
      <tr>{
        schema.map((element: any) => (
          <th scope="col" key={element.key}>{element.label}</th>
        ))}
        <th scope="col" key="action-cell">Action</th>
      </tr>
    </thead>)

  public generateTableBody = (schema: any, data: any) => (
    <tbody>
      {data.map((row: any) => (
        <tr key={row.poDetailId}>
          {schema.map((element: any) => (
            // <td key={element.key}><FormField handleChange={this.handleChange} keyField={row.poDetailId} label={element.key} fieldType={element.type} value={row[element.key]} /></td>
            <td key={element.key} ><div className="span-input">{row[element.key]}</div></td>
          ))}
          <td className="action-cell">
            <span className="p-r-5"><EditIcon size={15} onClick={() => this.editRow(row)} /></span>
            {/* <span className="p-r-5"><i className="fa fa-clone f-16 clr-blue" aria-hidden="true" /></span> */}
            {/* <span className="p-r-5"><i className="glyphicon glyphicon-remove-circle f-16 clr-red" onClick={() => this.deleteRow(row.poDetailId)} aria-hidden="true" /></span> */}
          </td>
        </tr>))
      }
    </tbody>
  )

  public toggleModal = () => (
    this.setState((previousState: IReactFormState) => ({openModal: !previousState.openModal}))
  )

  public render() {
    const { schema, data, openModal, fieldValues, isEdit } = this.state;
    return (
      <div className="shadow-container">
        <div className="add-button">
          <Button onClick={this.addNew}><PlusIcon className="button-icon" size={17} />Add new</Button>
        </div>
        <div className="table-responsive lineItem">
          {schema.length && data.length ?
          <table className="table table-bordered">
            {this.generateTableHeader(schema)}
            {this.generateTableBody(schema, data)}
          </table> : <div className="loader" />}
        </div>
        {schema.length &&
          <EditGridModal
            initialValues={fieldValues}
            schema={schema}
            isEdit={isEdit}
            show={openModal}
            handleClose={this.toggleModal}
          />
        }
      </div>
    );
  }
}

export default ReactForm;
