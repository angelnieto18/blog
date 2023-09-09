import './index.css'
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

function App() {
	return (
		<>
			<header>
				<NavigationMenu.Root className='flex'>
					<NavigationMenu.List>
						<NavigationMenu.Item>
							<NavigationMenu.Link className='text-3xl'>MyBlog</NavigationMenu.Link>
						</NavigationMenu.Item>
					</NavigationMenu.List>
					<NavigationMenu.List>
						<NavigationMenu.Item>
							<NavigationMenu.Link>Sign up</NavigationMenu.Link>
						</NavigationMenu.Item>
						<NavigationMenu.Item>
							<NavigationMenu.Link>Log in</NavigationMenu.Link>
						</NavigationMenu.Item>
					</NavigationMenu.List>
				</NavigationMenu.Root>
			</header>
		</>
	);
}

export default App;
