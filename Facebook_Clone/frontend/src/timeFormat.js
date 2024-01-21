import { formatDistanceToNow, format, parse } from "date-fns";
export default function timeFormat(timestamp) {
    const currentDate = new Date();
    const postDate = new Date(timestamp);

    const timeDifferenceInDays = Math.floor(
      (currentDate - postDate) / (24 * 60 * 60 * 1000)
    );
    let formattedDate;

    if (timeDifferenceInDays < 7) {
      // Display relative time for dates within the last 7 days
      formattedDate = formatDistanceToNow(postDate, { addSuffix: true });
    } else {
      // Display specific date for dates older than 7 days
      formattedDate = format(postDate, "  MMMM d , yyyy");
    }
  return formattedDate;
}
