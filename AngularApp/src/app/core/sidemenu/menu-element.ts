export class MenuMaker {
    menus = [];
    access: string;
    
    _menuMaker(){
        this.access = JSON.parse(localStorage.getItem('u_access'));        
        this.menus.push({
            'name': 'Dashboard',
            'icon': 'home',
            'link': '/auth/dashboard',
            'open': false,
        });
        for(var i = 0; i < this.access.length; i++){
            if(this.access[i]["m_name"] == "Employee Management")
            {
                this.menus.push({
                    'name': 'Employee Management',
                    'icon': 'account_circle',
                    'link': false,
                    'open': false,
                    'sub': [
                        {
                            'name': 'Import Employee',
                            'link': './pages/importemployee',
                            'icon': 'open_in_browser',
                            'chip': false,
                            'open': false,
                        },
                        {
                            'name': 'Search Employee',
                            'link': './pages/searchemployee',
                            'icon': 'search',
                            'chip': false,
                            'open': false,
                        },
                        {
            
                            'name': 'Add Employee',
                            'link': './pages/addemployee',
                            'icon': 'open_with',
                            'chip': false,
                            'open': false,
            
                        },
                        {
                            'name': 'Upload CV',
                            'link': './pages/uploadcv',
                            'icon': 'input',
                            'chip': false,
                            'open': false,
                        },
                        {
                            'name': 'Upload DL',
                            'link': './pages/uploaddl',
                            'icon': 'swap_vert',
                            'chip': false,
                            'open': false,
                        },
                        
                      
                       
                    ]
                   });
            }
            else if(this.access[i]["m_name"] == "Project Management")
            {
                this.menus.push({
                    'name': 'Project Management',
                    'icon': 'work',
                    'link': false,
                    'open': false,
                    'sub': [
                        {
                            'name': 'Search Project',
                            'icon': 'search',
                            'link': './pages/searchproject',
                            'open': false,
                        },
                        {
                            'name': 'Add Project',
                            'icon': 'input',
                            'link': './pages/addproject',
                            'open': false,
                        },
                        {
                            'name': 'Upload SOW',
                            'icon': 'open_in_browser',
                            'link': './pages/uploadsow',
                            'open': false,
                        },
                        {
                            'name': 'Add Client',
                            'icon': 'menu',
                            'link': './pages/addclient',
                            'open': false,
                        }
                    ]
                   });
            }
            else if(this.access[i]["m_name"] == "Practice Management")
            {
                this.menus.push({
                    'name': 'Practice Management',
                    'icon': 'mode_edit',
                    'link': false,
                    'open': false,
                    'sub': [
                        {
                            'name': 'Add Practice Updates',
                            'icon': 'account_balance',
                            'open': false,
                            'link': false,
                        }, {
                            'name': 'Practice Expenses',
                            'icon': 'description',
                            'open': false,
                            'link': false,
                        }
                    ]
                   });
            }
            else if(this.access[i]["m_name"] == "Reports")
            {
                this.menus.push({
                    'name': 'Reports',
                    'link': false,
                    'open': false,
                    'icon': 'timeline',
                    'sub': [
                        {
                            'name': 'Practice',
                            'icon': 'exit_to_app',
                            'open': false,
                            'link': false,
                        }, {
                            'name': 'Project',
                            'icon': 'find_replace',
                            'open': false,
                            'link': 'pages/services',
                        }, {
                            'name': 'Year wise Project Revenue',
                            'icon': 'autorenew',
                            'open': false,
                            'link': 'pages/contact'
                        }, {
                            'name': 'resources by Project and Month',
                            'icon': 'menu',
                            'open': false,
                            'link': 'pages/contact'
                        }, {
                            'name': 'Practice Finance Summary',
                            'icon': 'group_work',
                            'open': false,
                            'link': 'pages/contact'
                        }
                    ]
                   });
            }
            else if(this.access[i]["m_name"] == "Timesheet")
            {
                this.menus.push({
                    'name': 'Timesheet',
                    'icon': 'query_builder',
                    'open': false,
                    'link': false,
                   });
            }
        }
        return this.menus;
    }
}

export const menus = [];
