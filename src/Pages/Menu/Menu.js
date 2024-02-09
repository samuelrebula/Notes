import { Avatar, AppBar, Drawer, List, ListItem, ListItemText, Toolbar, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { MdHome, MdNoteAdd } from "react-icons/md";
import { FaTrash, FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Menu.css"

function Menu(props) {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState("/home");
    const [open, setOpen] = useState(false);

    function handleClick(pathName) {
        navigate(pathName);
        setCurrentPage(pathName)
    }

    function handleDrawer(isOpen) {
        setOpen(isOpen);
    }

    const pages = [
        {
            pathName: "/home",
            icon: <MdHome />,
            text: "My notes",
            iconSize: "1.5em"
        },
        {
            pathName: "/",
            icon: <MdNoteAdd />,
            text: "New note",
            iconSize: "1.5em"
        },
        {
            pathName: "/",
            icon: <FaTrash />,
            text: "Files",
            iconSize: "1.3em"
        },
        {
            pathName: "/profile",
            icon: <FaUser />,
            text: "Profile",
            iconSize: "1.3em"
        }
    ];

    return (
        <>
            <AppBar position="static">
                <Toolbar className="toolBar">
                    <IconButton edge="start" aria-label="menu" onClick={() => handleDrawer(!open)}>
                        <FiMenu />
                    </IconButton>
                    <div className="userContainer">
                        <p className="userName"> Hans Fritz </p>
                        <Avatar alt="Hans Fritz" src="/images/Avatar.png" />
                    </div>
                </Toolbar>
            </AppBar>
            {props.children}
            <Drawer open={open} onClose={() => handleDrawer(false)} >
                <List className="list">
                    {pages.map((listItem) => {
                        return (
                            <ListItem 
                            button
                            selected={currentPage === listItem.pathName} 
                            onClick={() => {
                                handleClick(listItem.pathName)
                            }}
                        >
                            <IconContext.Provider value={{ color: "#343434", size: listItem.iconSize }}>
                                {listItem.icon}
                            </IconContext.Provider>
                            <ListItemText className="listItemText">
                                <Typography>{listItem.text}</Typography>
                            </ListItemText>
                        </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </>
    )
}

export default Menu;