import React from 'react';
import { CDBSidebar, CDBSidebarContent, CDBSidebarFooter, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
            <CDBSidebar textColor="#fff" backgroundColor="black">
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
                        Menu
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink to="/work" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">Dashboard</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/work" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="plus-circle">Place Order</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/progress" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="chart-line">Progress</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/user-order" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="history">Your Orders</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/profile" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink to="/" activeClassName="activeClicked">
                            <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        style={{
                            padding: '20px -15px',
                        }}
                    >
                        <CDBSidebarMenu>
                            <NavLink to="/" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="signout">Sign out</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                    </div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;
