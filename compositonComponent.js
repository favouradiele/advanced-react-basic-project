const Button = ({children, backgroundColor})=>{
    return <button style={{backgroundColor}}>{children}</button>
};

const Alert = ({children}) =>{
    return(
<>
<div className="Overlay"/>
<div className="Alert">{children}</div>
</>
    )
};

const DeleteButton = () => {

    return<Button backgroundColor="red">Delete</Button>
}

function Compostion(){
    return(
        <div>
            <Alert>
                <h4>Delete Account</h4>
                <p>Are you sure you want to proceed? E go choke</p>
                <DeleteButton/>
            </Alert>
            <header>
                Little lemon Resturant
            </header>
        </div>
    )
}

export default Compostion;