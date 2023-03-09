    import {UserProvider, useUser} from "../UserContext";

    const LoggedInUser = () =>  {
        const {user} = useUser();
        return(
            <p>
                Hello Mr. <span className="Username">{user.name}</span>
            </p>
        );
    };

    const Header = () => {
        
        return (
            <header>
                <h2>Blog App</h2>
                <LoggedInUser/>
            </header>
        );
    };

    const Page = () => {
        const {user} = useUser();
        return(
            <div>
                <h2>what is lorem Ipsum?</h2>
            <p>
            DessertsList` component as a prop named `data`.

Each item from the list should display the name of the dessert and the number of calories, both separated by a dash character, i.e. `Chocolate Mousse - 250 cal`.
            </p>
            <p>
                written by {user.name}
            </p>
            </div>
        );
    };

    function Context(){
        return(
            <div className="App">
                <Header/>
                <Page/>
            </div>
        );
    }

    function Root (){
        return <UserProvider><Context/></UserProvider>
    }

    export default  Root;