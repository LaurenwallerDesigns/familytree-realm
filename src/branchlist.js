import React, {useState} from 'react';
import { Icon, Button, Pane, Heading, IconButton, NewPersonIcon, EditIcon, FilterIcon, GridViewIcon, GlobeIcon, IntersectionIcon, ListIcon, UserIcon, SelectIcon, Tooltip, SearchIcon} from "evergreen-ui"
import Branch from './branch';
import Form from './dataform';

function Header(props) {
    return (
        <Pane 
            width="100vw" 
            height="50px" 
            display="flex"
            flexDirection="row" 
            justifyContent="space-between">
            <Pane 
                is="section" 
                display="flex" 
                flexDirection="row" 
                justifyContent="space-between" 
                alignItems="center">
                <Icon 
                    icon={UserIcon}  
                    margin={2} 
                />
                <Heading 
                    is="h3" 
                    margin={2} >
                    {props.user.id}
                </Heading>
            </Pane>
                <Pane 
                    is="section">
                    <Tooltip 
                        content="Add New Person">
                        <IconButton 
                            icon={NewPersonIcon} 
                            onClick={() => props.setView('form')} 
                            margin={2}
                            intent={props.view === 'form' ? "success" : props.view === 'edit' ? "disabled" : "default" }
                            />
                    </Tooltip>
                    <Tooltip content="Edit Mode">
                        <IconButton 
                            icon={EditIcon} 
                            onClick={() => props.setView('edit')} 
                            margin={2}
                            intent={props.view === 'edit' ? "success" : props.view === 'form' ? "disabled" : "default" }
                        />
                    </Tooltip>
                    {/* <IconButton icon={SelectIcon} />
                    <IconButton icon={IntersectionIcon} /> */}
                </Pane>
                <Pane is="section">
                    <Tooltip content="Filter List">
                        <IconButton 
                            icon={FilterIcon} 
                            onClick={() => props.setView('filter')} 
                            margin={2}
                            intent={props.view === 'filter' ? "success" : props.view === 'search' | 'edit' | 'form' ? "disabled" : "default" }
                            />
                    </Tooltip>
                    <Tooltip content="Grid-View">
                        <IconButton 
                            icon={GridViewIcon} 
                            onClick={() => props.setView('grid')} 
                            margin={2} 
                            intent={props.view === 'grid' ? "success" : props.view === 'edit' | 'form' ? "disabled" : "default" }
                        />
                    </Tooltip>
                    <Tooltip content="Globe-View">
                        <IconButton 
                            icon={GlobeIcon} 
                            onClick={() => props.setView('globe')} 
                            margin={2} 
                            intent={props.view === 'globe' ? "success" : props.view === 'edit' | 'form' ? "disabled" : "default" }
                            />
                    </Tooltip>
                    <Tooltip content="List-View">
                        <IconButton 
                            icon={ListIcon} 
                            onClick={() => props.setView('list')} 
                            margin={2} 
                            intent={props.view === 'list' ? "success" : props.view === 'search' | 'edit' | 'form' ? "disabled" : "default" }
                            />
                    </Tooltip>
                    <Tooltip content="Search">
                        <IconButton 
                            icon={SearchIcon}  
                            onClick={() => props.setView('search')} 
                            margin={2}
                            intent={props.view === 'search' ? "success" : props.view === 'filter' | 'edit' | 'form' ? "disabled" : "default" }
                        />
                    </Tooltip>
                </Pane>
            </Pane>  
    )
}


function BranchList(props) {
    console.log(props);
    const [clickedID, setClickedId] = useState('412311256026')
    const [view, setView] = useState('grid')
    return view === 'grid' ? (
        <Pane 
            border="muted" 
            justifyContent="center" 
            display="flex" 
            minHeight="100vh" 
            height="auto" 
            background="red25"  
            flexDirection="row" 
            flexWrap="wrap" 
            alignItems="flex-start">
            <Header 
                setView={setView}
                user={props.user}
            />
            {props.branches.map((branch) => {
                return <Branch branch={branch}
                                            setClickedId={setClickedId}
                                            clickedID={clickedID}
                                            branches={props.branches}
                                            view={view} />
                })}
                    <Pane 
                        is="section" 
                        width="100vw" 
                        height="auto" 
                        textAlign="center" >
                        <Button
                            height={50}
                            width="auto"
                            marginBottom={5}
                            appearance="primary"
                            intent="danger"
                            onClick={props.logOut}
                        >
                            Log Out
                        </Button>
                    </Pane>
        </Pane>
    ) :  view === 'form'  ? (
        <>
            <Header 
                    view={view}
                    setView={setView}
                    user={props.user}
                />
            <Form 
                view={view}
                setView={setView} />
        </>
    )  : (
        <>
            <Header 
                    setView={setView}
                    user={props.user}
                />
            <Heading> 
                An Error has occured
            </Heading>
        </>
    )}

export default BranchList;