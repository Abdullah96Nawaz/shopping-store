import React from 'react';
import { Steps, Button, message,Row,Col } from 'antd';
import './CSS/forStepper.css';
import ItemsList from './ItemsList';
import DetailsForm from './DetailsForm';
const Step = Steps.Step;

const steps = [{
  title: 'First',
  content: 'First-content',
}, {
  title: 'Second',
  content: 'Second-content',
}, {
  title: 'Last',
  content: 'Last-content',
}];

class Checkout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
      }
    
      next() {
        const current = this.state.current + 1;
        if(this.state.current==1)
          this.child.handleSubmit()
        else
          this.setState({ current });
      }
    
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }
      
      nextFromChild=()=>{
        const current = this.state.current + 1;
        this.setState({ current });
      }
      render() {
        const { current } = this.state;
        return (
          <Row>
            <Col span={12} offset={6}>
              <div style={{width:'100%'}}>
                <br/>
                <Steps current={current} style={{width:'100%'}}>
                  {steps.map(item => <Step key={item.title} title={item.title} />)}
                </Steps>
                <br/>
                {/* <div className="steps-content">{current}</div> */}
                {current==0
                  ?<ItemsList/>
                  :<DetailsForm next={this.nextFromChild} onRef={ref => (this.child = ref)}/>}
                <div className="steps-action">
                  {
                    current < steps.length - 1
                    && <Button type="primary" onClick={() => this.next()}>Next</Button>
                  }
                  {
                    current === steps.length - 1
                    && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
                  }
                  {
                    current > 0
                    && (
                    <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                      Previous
                    </Button>
                    )
                  }
                </div>
              </div>
            </Col>
        </Row>

          
        );
      }
}

export default Checkout;