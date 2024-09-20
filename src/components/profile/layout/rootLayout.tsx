import ProfileSlieBar from './profile-sliebar';

export function UserProfileRootLayout(
  { children }: {children: JSX.Element | JSX.Element[]},
) {
  return (
    <div className='flex flex-col gap-4 h-full max-w-[1216px] box-content mx-auto py-4'>
      <div className="flex flex-col flex-1 h-full px-4 laptop:flex-row laptop:px-0">
        <ProfileSlieBar/>
        <div className='flex-1 h-full shrink'>
          {children}
        </div>
      </div>
    </div>
  );
}
