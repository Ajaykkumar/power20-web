
import Axios from 'axios';
import * as React from 'react';
import { Button } from 'react-bootstrap';
import { Plus as PlusIcon } from 'react-feather';
import EditGridModal from '../../components/DataGrid/EditGridModal';

import './workouts.css';

interface IReactFormState {
  data: object[];
  fieldValues: object;
  openModal: boolean;
  isEdit: boolean;
  schema: any;
}

class Workouts extends React.PureComponent<IReactFormState> {
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
    // const config = {
    //   headers: {
    //     'Authorization': 'Basic c3VwZXJ1c2VyOnN1cGVydXNlcg==',
    //     'Content-Type': 'application/json',
    //     'Set-Cookie': 'JSESSIONID=5B44D2EC3C9121B36F7D2ADCABD0FC25; Path=/'
    //   }
    // };
    // axios.get('http://192.168.1.158:7080/services/api/appengine/metadata/5e4dcb6e-ba5f-11e8-ae89-d6f7626402b4', config).then(
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


  public addNew = (values: any) => {
    this.setState({
      isEdit: false,
      openModal: true
    });
  }

  public toggleModal = () => (
    this.setState((previousState: IReactFormState) => ({ openModal: !previousState.openModal }))
  )

  public render() {
    const { data, fieldValues, isEdit, openModal, schema } = this.state;
    return (
      <div className="shadow-container">
        <div className="salesForm container-fluid">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="customer">Customer</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label>Branch</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label htmlFor="store">Store</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label htmlFor="dispatchDate">Dispatch Date</label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="row mt-10">
            <div className="col-md-3">
              <label htmlFor="POId">PO #</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label htmlFor="doctorName">Doctor Name</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-3">
              <label htmlFor="patientName">Patient Name</label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col-md-12 mt-10 p-0">
            {/* <div className="panel panel-default">
                  <div className="panel-heading">Line Item</div> */}
            <div className="ptb-10 textRight">
              <span style={{ float: 'left' }} className="f-16">Line Item</span>
              <Button onClick={this.toggleModal}><PlusIcon className="button-icon" size={17} />Add Item</Button>
            </div>
            <div className="table-responsive lineItemGrid">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th><div>Item</div></th>
                    <th>Batch #</th>
                    <th>Exp</th>
                    <th>Avail Billing Qty</th>
                    <th>Avail Free Qty</th>
                    <th>Req Qty</th>
                    <th>Disp Qty</th>
                    <th>Qty</th>
                    <th>Free Qty</th>
                    <th>Free to Billing</th>
                    <th>Total Qty</th>
                    <th>Actual Total Qty</th>
                    <th>UOM</th>
                    <th>UOM Size</th>
                    <th>Unit Price (₹)</th>
                    <th>MRP (₹)</th>
                    <th>IGST</th>
                    <th>Tax (%)</th>
                    <th>Tax (₹)</th>
                    <th>Disc (%)</th>
                    <th>Disc (₹)</th>
                    <th>Sales Value (₹)</th>
                    <th>Amount (₹)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? data.map((item: any) => (
                    <tr key={item.id}>
                      <td>{item.itemName}</td>
                      <td>{item.batchNo}</td>
                      <td>{item.expiryDate ? `${new Date(item.expiryDate).getUTCMonth() + 1}/${new Date(item.expiryDate).getFullYear()}` : ''}</td>
                      <td>{item.availableBillingQty}</td>
                      <td>{item.availableFreeQty}</td>
                      <td>{item.requestedQuantity}</td>
                      <td>{item.dispatchedQuantity}</td>
                      <td>{item.quantity}</td>
                      <td>{item.freeQuantity}</td>
                      <td>0</td>
                      <td>{item.quantity + item.freeQuantity}</td>
                      <td>{(item.quantity + item.freeQuantity) * item.uomSize}</td>
                      <td>{item.uom}</td>
                      <td>{item.uomSize}</td>
                      <td>{item.unitPrice}</td>
                      <td>{item.mrp}</td>
                      <td>IGST</td>
                      <td>{item.taxValue}</td>
                      <td>{item.tax}</td>
                      <td>{item.discount}</td>
                      <td>{item.discountValue}</td>
                      <td>{(item.quantity * item.unitPrice - item.discount)}</td>
                      <td>{item.totalAmount}</td>
                      <td>
                        <span className="p-r-5"><i className="fa fa-pencil-square-o f-16" aria-hidden="true" /></span>
                        {/* <span className="p-r-5"><i className="fa fa-clone f-16 clr-blue" aria-hidden="true" /></span> */}
                        {/* <span className="p-r-5"><span className="glyphicon glyphicon-remove-circle f-16 clr-red" aria-hidden="true" /></span> */}
                      </td>
                    </tr>
                  )) : <tr>
                      <td colSpan={24} className="noDataFound"><div>No data available</div></td>
                    </tr>}
                </tbody>
              </table>
            </div>
          </div>
          <div className="panel panel-default col-md-6 mt-20 p-0">
            <div className="panel-heading">Additional</div>
            <div className="panel-body">
              <div className="row">
                <div className="col-md-3">
                  <label htmlFor="tax">Tax</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col-md-3">
                  <label htmlFor="discountPercent">Discount (%)</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col-md-3">
                  <label htmlFor="discountAmount">Discount (₹)</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col-md-3">
                  <label htmlFor="freightCharge">Freight (₹)</label>
                  <input type="number" className="form-control" />
                </div>
              </div>
              <div className="row mt-10">
                <div className="col-md-3">
                  <label htmlFor="otherCharges">Other (₹)</label>
                  <input type="number" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-20 p-r-0">
            <div className="fieldAndValue">
              <div className="col-sm-5 p-0 textRight"><label className="key">Sub Total (₹)</label></div>
              <div className="col-sm-7 p-r-0">
                <input type="text" className="form-control textRight" />
              </div>
            </div>
            <div className="fieldAndValue">
              <div className="col-sm-5 p-0 textRight"><label className="key">Total (₹)</label></div>
              <div className="col-sm-7 p-r-0">
                <input type="text" className="form-control textRight" /></div>
            </div>
          </div>
          <div className="col-sm-6 textRight mt-20 p-r-0">
            <Button type="submit" className="addnew">
              <span className="fa fa-plus-circle p-r-5" aria-hidden="true" />Create
            </Button>
            <Button className="btn-cancel" type="button" >
              <span className="fa fa-times-circle p-r-5" aria-hidden="true" />Cancel
            </Button>
          </div>
        </div>
        <EditGridModal initialValues={fieldValues} schema={schema} isEdit={isEdit} show={openModal} handleClose={this.toggleModal} />
      </div>
    );
  }
}

// const mapStateToProps = (state: IState) => ({
//   loading: state.user.loading,
// });

// const mapDispatchToProps = (dispatch: any) => ({
//   fetchUsers: () => dispatch(fetchUsers())
// });

// interface IStateProps {
//   salesBill: any[];
//   loading: boolean;
// }

// interface IDispatchProps {
//   fetchUsers: () => void;
// }

// export default compose(
//   withRouter,
//   connect<IStateProps, IDispatchProps>(
//     mapDispatchToProps
//   ),
//   withLocalize
// )(Workouts);

export default Workouts;
