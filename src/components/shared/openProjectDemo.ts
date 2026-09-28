export function openProjectDemo() {
  const dialog = document.getElementById("project-demo") as HTMLDialogElement | null;
  if (!dialog || dialog.open) return;

  dialog.showModal();

  const video = dialog.querySelector("video");
  if (video) {
    video.currentTime = 0;
    void video.play().catch(() => {
      // Native controls remain available if a browser blocks autoplay.
    });
  }
}
