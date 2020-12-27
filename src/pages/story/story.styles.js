import styled from 'styled-components';

export const StoryPageContainer = styled.div`
font-family: 'Helvetica_Neue', sans-serif;
overflow: scroll;
height: 90vh;
img{
    width: 10vw;
    margin-bottom: 0;
}
h1{
    font-size: 22px;
    margin-top: calc(5vw);
}
p{
    font-size: 21px;
}
.text-container{
    
    text-align: left;
    width: 60%;
    margin: auto;
    h3{
        font-weight: 800;
        font-size: 32px;
    }
    .top-quote{
        font-style: italic;
    }
    .question-section{
        margin-top: 3vh;
        .question{
            font-weight: 800;
        }
        .answer{
            margin-bottom: 5%;

        }
        .quote{
            font-size: 24px;
            padding: 16px;
            width: 60%;
            margin: 4% auto;
            border-left: 4px solid white;
            margin-bottom: 5%;

        }
        .divider{
            margin: auto;
            width: 5%;
            border-bottom: 2px solid gray;
        }
    }
            .join-our-cause{
                p{
                    text-align: center;
                    margin: 7% auto;
                }
                margin: 32px auto;
            }
}
@media only screen and (max-width: 768px) {
    height: 100vh;
    img{
        width: 35%;
    }
    h1{
        font-size: 22px;
        margin-top: calc(10vw + 5vh);
    }
    .text-container{
        h3{
            margin-top: 0;
        }
        width: 92%;
        .join-our-cause{
            p{
                margin-top: 5vh;
                font-size: 18px;
            }
        }

    }
}
`