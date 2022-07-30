import styled from "styled-components"

export const ContainerRandom = styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
    width: 100%;
    justify-content: space-between;
`

export const ColumnLeft = styled.div`
    width: 40px;
    height: 600px;
    left: 0px;
`

export const MainContent = styled.div`
    display: flex;
    max-width: 1280px;
    
    #leftContainer{
        padding: 50px;
        width: 620px;
        height: 640px;
        object-fit: cover;
    }
    #rightContainer {
        width: 620px;
        height: 640px;
        object-fit: cover;
        border-top-right-radius: 50px;
        border-bottom-right-radius: 50px;
    }
    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        margin-top: 24px;
        color: rgba(0, 0, 0, 0.6);
    }
    #container-foot{
        display: flex;
        align-items: center;
        margin-top: 174px;
        justify-content: space-between;
    }
    #container-user {
        display: flex;
        gap: 16px;
    }
    #text-container{
        display: flex;
        flex-direction: column;
        gap: 8px;
        p{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;

            letter-spacing: -0.02em;

            color: rgba(0, 0, 0, 0.6);
            margin: 0;
        }
        #date{
            margin-top: 0;
        }
       strong{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: -0.02em;

            color: #000000;
        }
    }
    #userImage{
        border-radius: 50%;
    }
`