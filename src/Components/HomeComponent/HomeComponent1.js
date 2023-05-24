import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import ShareIcon from '@mui/icons-material/Share';
import "../../Pages/Homepage/Style.css";
import Divider from '@mui/material/Divider';
import ImportExportIcon from '@mui/icons-material/ImportExport';

function homeComponent1(){
    return(
        <>
            <div className="home_component1">
                <h4 align="left">IMDb Charts</h4>
                <div className="flex3">
                    <h3>IMDb Top 250 Movies</h3>
                    <ShareIcon/>
                </div>

                <div className="flex3" align="left">
                    <p>IMDb Top 250 as rated by regular IMDb voters.</p>
                    <div>SHARE</div>
                </div>

                <div></div>

                <Divider style={{ background: 'black' }} variant="middle" />
                <br/>
                <div className="flex3">
                    <p>Showing 250 Titles</p>
                    <div>
                        <div className="flex2">
                            <div>Sort by:</div>
                            <NavDropdown href="#all" title="Ranking" id="basic-nav-dropdown" className='navinside2'>
                                <div className="dropdown3">
                                    <NavDropdown.Item >Ranking</NavDropdown.Item>
                                    <NavDropdown.Item >IMDb Rating</NavDropdown.Item>
                                    <NavDropdown.Item >Release Date</NavDropdown.Item>
                                    <NavDropdown.Item >Number of Ratings</NavDropdown.Item>
                                    <NavDropdown.Item >Your Rating</NavDropdown.Item>
                                </div>
                            </NavDropdown>
                            <div className="importexporticon">
                                <ImportExportIcon/>
                            </div>
                        </div>

                    </div>
                </div>

           

            </div>
        </>
    )
}

export default homeComponent1;