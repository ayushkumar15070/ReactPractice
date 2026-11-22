import "./Box.css";

const data = [
  "Astha Sharma", "Astha Shukla", "Astha Tiwari", "Atharv Mishra", "Atharv Mishra", "Atharv Pathak", "Atharv Trivedi", "Atharv Gupta", "Atish Yadav", "Atulya Goyal", "Auchitya Yadav", "Avantika Jha", "Avantika Verma", "Avantika Yadav", "Avi Tripathi", "Avika Agrahari", "Avika Bajpai", "Avika Shukla", "Avika Srivastava", "Avika Yadav", "Avinash Pal", "Aviral Dwivedi", "Aviral Kumar Upadhyay","Aviral Saxena", "Aviral Sharma", "Avishal Singh", "Avni Maheshwari", "Aysha Wali", "Ayan Ahmed", "Ayush Dubey", "Ayush Gupta", "Ayush Kumar Gupta", "Ayush Kumar Gupta", "Ayush Kumar Pandey", "Ayush Kumar Vishwakarma", "Ayush Mishra", "Ayush Mishra", "Ayush Nishad", "Ayush Pal", "Ayush Pratap Singh", "Ayush Rai", "Ayush Sachan", "Ayush Singh", "Ayush Tiwari", "Ayush Tiwari", "Ayush Tiwari", "Ayush Tripathi", "Ayush Tripathi", "Ayush Verma", "Ayush Visen", "Ayush Yadav", "Ayush Yadav", "Ayush Yadav", "Ayush Yadav", "Ayushi Prajapati", "Ayushi Singh", "Ayushi Singh", "Bhagyansh Pandey", "Bhairavi Pandey"]
  
function Boxes(props){
    return (
      <>
      <div className="boxes">{props.name}</div>
      </>
    )
}
  
const App = () => {
  return (
    <div className="container">
      {
        data.map(stud => 
          <Boxes name = {stud} />
        )
      }
    </div>
  )
}

export default App
