export default function Footer() {
  return (
    <footer className="flex gap-4 justify-center items-center border-t border-white border-border py-4">
      <p>
        Made with ❤️ by <a href="https://github.com/Phanty78">Maël Donnart</a>
      </p>
      <p>{new Date().getFullYear()} All right reserved</p>
    </footer>
  )
}
