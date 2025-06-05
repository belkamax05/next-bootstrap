export default async function DevInfoPage() {
  return (
    <div>
      <pre>Build time: {new Date(process.env.BUILD_TIME).toLocaleString('en-GB')}</pre>
    </div>
  );
}
