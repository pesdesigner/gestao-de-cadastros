import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;
    margin-bottom: 100px;
    display: table;

    h1 {
        text-align: center;
        margin: 25px;
    }

    section {
        width: 100%;
        padding: 10px;
        background-color: #FFFAFA;
        box-shadow: 5px 5px 10px -2px rgba(148,141,141,0.71);
        -webkit-box-shadow: 5px 5px 10px -2px rgba(148,141,141,0.71);
        -moz-box-shadow: 5px 5px 10px -2px rgba(148,141,141,0.71);

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }

    .product-content{
        max-width: 200px;
        text-align: center;
        background: #FFF;
        border-radius: 12px;
        margin: 10px;
        padding: 10px 0 10px 0;

        box-shadow: 5px 5px 10px -2px rgba(148,141,141,0.71);
        -webkit-box-shadow: 5px 5px 10px -2px rgba(148,141,141,0.71);
        -moz-box-shadow: 5px 5px 10px -2px rgba(148,141,141,0.71);

        .product-info {
            padding: 10px;

            span {
                font-size: .9rem;
            }

            h6 {
                margin-top: 10px;
                font-size: 1.5rem;
                color: green;
            }
        }
    }

    button {
        width: 80%;
        padding: 8px;
        font-size: 1rem;
        cursor: pointer;
        text-transform: uppercase;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: #fff;
        background-color: #4CAF50;
        border: none;
        border-radius: .4rem;
        box-shadow: 0 2px #000;

        :hover {
            background-color: #3e8e41;
        }

        :active {
            background-color: #3e8e41;
            box-shadow: 0 2px #666;
            transform: translateY(4px);
        }
    }

    /* mobile */
    @media (max-width: 769px){
        .product-content{
            max-width: none;
            height: auto;
        }
    }
`

export const Footer = styled.div`
    width: 100%;
    margin: auto;
    
    footer{
        height: auto;
        padding: 25px;
        text-align: center;
        background-color: #001D98;
        color: #ccc;
    }

    .logos{
        margin-top: -65px;
        justify-content: space-around;
        align-items: center;
        display: flex;
    }

    .logo-hc{
        width: 150px;
    }

    a{
        text-decoration: none;
        color: #1fd407;
    }

    a:hover{
        color: #f1e313;
    }

    /* mobile */
    @media (max-width: 769px)
    {
        /* footer */
        .logos{
            display: flex;
            margin-top: 10px;
            align-content: center;
            flex-direction: column;
        }

        .logo-hc{
            margin-top: 20px;
            width: 150px;
        }
    }
`