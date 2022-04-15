import styled from "styled-components";

export const Card = styled.div`
font-family: sans-serif;
display: flex;
flex-direction: row;
gap: 100px;
max-width: 1024px;
border-radius: 8px;
border: 1px solid;
border-color: #e1e1e1;
height: auto;
padding: 40px;
align-content: center;
margin: 50px;

.showDetails{
    flex: 2;
}
.showTitle{
        font-size: 30px;
        line-height: 130%;
        padding-bottom: 16px;
    }

.showDescription{
    line-height: 150%;
}

.Date{
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    padding-bottom: 16px;
}

@media (max-width: 900px) {
    flex-direction: column;
    gap: 40px;
    padding: 30px;
    margin: 20px;

    .showTitle{
        font-size: 24px;
        line-height: 130%;
        padding-bottom: 16px;
    }
}
`
export const HostImage= styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 32px;
    flex:1;

    .individualHost{
        display:flex;
        flex-direction: row;
        align-items: center;
    }

    .hostName{
        text-align: left;
        padding-left: 20px;
        line-height: 140%;
        gap: 10px;
        font-size: 14px;
    }

    .hostName > .tag{
        padding:4px 6px;
        font-size: 10px;
        line-height: 100%;  
        border-radius: 4px;
        background-color: hsl(208deg 100% 95%);
        width: fit-content;
        margin-bottom: 4px;
    }
    img{
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 100%;
        background: radial-gradient(at 0% 30%,#5175F4 40%,#31E4D6,#FFAB2D);
    }
`
export function HostMod(props){
    return(
            
            <Card>
                <div className="showDetails">
                    <div className="Date">
                    <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2.5" y="2.5" width="15" height="15" rx="1.77778" stroke="#0079BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.5 8.125H17.5" stroke="#0079BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M6.25 1.25L6.25 5" stroke="#0079BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.75 1.25L13.75 5" stroke="#0079BD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
                    <div>28 April 2022</div>
                    </div>
                    <div className="showTitle">{props.title}</div>
                    <div className="showDescription">{props.description}</div>
                </div>
                
                    <HostImage>
                        <div className="individualHost">
                            <img src={props.imgsrc}/>
                            <div className="hostName">
                                <div className="tag">HOST</div>
                                <b>Jesse Martin</b>,<br/>
                                Technical product marketer, Hasura
                            </div>
                        </div>
                        <div className="individualHost">
                            <img src={props.imgsrc2}/>
                            <div className="hostName">
                                <div className="tag">HOST</div>
                                <b>Jesse Martin</b>,<br/>
                                Technical product marketer, Hasura
                            </div>
                        </div>
                    </HostImage>
                    
                
            </Card>
            

    )
}