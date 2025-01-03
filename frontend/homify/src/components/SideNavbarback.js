
function SideNavbar() {
	return (
		<div>
			<div class="flex bg-gray-200 ">
	<div class="bg-gray-900 lg:flex md:w-64 md:flex-col">
		<div class="flex-col pt-5 flex overflow-y-auto">
			<div class="px-4 flex flex-col justify-between mb-10">
				<div class="flex items-center space-x-4 ">
					<img
						src="https://static01.nyt.com/images/2019/11/08/world/08quebec/08quebec-superJumbo.jpg"
						class="h-10 w-10 rounded-full bg-gray-500"
						alt="User"
					/>
					<div>
						<p class="text-indigo-500 font-semibold">Marrie Currie</p>
						<p class="text-indigo-600 text-sm">Admin</p>
					</div>
				</div>
				<nav class="mt-10 space-y-2">
					<a
						href="#"
						class="flex items-center p-2 bg-indigo-500 text-gray-100 rounded-lg hover:bg-indigo-400"
					>
						<svg
							class="w-6 h-6 mr-3 text-gray-200"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
							/>
						</svg>
						<span class="text-gray-100">Dashboard</span>
					</a>
					<a
						href="#"
						class="flex items-center p-2 bg-indigo-500 text-gray-100 rounded-lg hover:bg-indigo-400"
					>
						<svg
							class="w-6 h-6 mr-3 text-gray-200"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-7 4h8a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v11a2 2 0 002 2z"
							/>
						</svg>
						<span class="text-gray-100">Projects</span>
					</a>
					<a
						href="#"
						class="flex items-center p-2 bg-indigo-500 text-gray-100 rounded-lg hover:bg-indigo-400"
					>
						<svg
							class="w-6 h-6 mr-3 text-gray-200"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 7h18M3 12h18m-9 5h9"
							/>
						</svg>
						<span class="text-gray-100">Reports</span>
					</a>
					<a
						href="#"
						class="flex items-center p-2 bg-indigo-500 text-gray-100 rounded-lg hover:bg-indigo-400"
					>
						<svg
							class="w-6 h-6 mr-3 text-gray-200"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<span class="text-gray-100">Tasks</span>
					</a>
				</nav>
				<div class="mt-2 space-y-2">
					<a
						href="#"
						class="flex items-center p-2 bg-indigo-500 text-gray-100 rounded-lg hover:bg-indigo-400"
					>
						<svg
							class="w-6 h-6 mr-3 text-gray-200"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<span class="text-gray-100">Settings</span>
					</a>
					<a
						href="#"
						class="flex items-center p-2 bg-indigo-500 text-gray-100 rounded-lg hover:bg-indigo-400"
					>
						<svg
							class="w-6 h-6 mr-3 text-gray-200"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 11-6 0v-1m6-4V9a3 3 0 00-6 0v1"
							/>
						</svg>
						<span class="text-gray-100">Logout</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
		</div>
	);
}

export default SideNavbar;