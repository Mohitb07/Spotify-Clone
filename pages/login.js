import { getProviders, signIn } from 'next-auth/react'

function Login({ providers }) {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
      <img className="mb-5 w-52" src="https://links.papareact.com/9xl" alt="" />
      {Object.values(providers).map((provider) => (
        <div key={providers.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            className="rounded-full bg-[#18D860] p-5 text-white"
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
