

        // Event listener to open the dialog
        const dialog = document.getElementById('sampleDialog');
        const dialogText = document.getElementById('dialogText');
        const closeButton = document.getElementById('closeDialog');

        function openDialog(id) {
            const dialogTitle = document.getElementById('dialogTitle');

            dialog.showModal({
                width: 500,
                autoFocus: false,
                disableClose: true
            });

            if (id == 0) {
                dialogTitle.innerHTML = "Online Registration";
                dialogText.innerHTML = "Corporate IT Solutions offers a comprehensive online registration service designed to streamline the registration process for events, conferences, and other activities. This service is tailored to meet the specific needs of each client, ensuring a smooth and efficient experience for both organizers and participants."
            }
            else if (id == 1) {
                dialogTitle.innerHTML = "Online Exhibitor Management";
                dialogText.innerHTML = "Corporate IT Solutions offers a comprehensive online exhibitor manual service specifically designed for trade exhibitions. This service helps organizers streamline communication with exhibitors and ensures that all necessary information is easily accessible.";

            } else if (id == 2) {
                dialogTitle.innerHTML = "Abstractor Management"
                dialogText.innerHTML = "Corporate IT Solutions offers a specialized medical and scientific abstract management service designed to streamline the submission, review, and organization of abstracts for conferences, symposiums, and other academic events. This service is tailored to meet the unique needs of medical and scientific communities, ensuring a smooth and efficient process for all stakeholders involved.";
            } else {
                dialogTitle.innerHTML = "Lead Retrieve";
                dialogText.innerHTML = "Corporate IT Solutions offers a comprehensive lead retrieval service specifically designed for trade shows, providing exhibitors with powerful tools to capture, manage, and follow up on leads efficiently. This service helps maximize the value of exhibitor participation by ensuring they can easily collect and utilize attendee information."
            }


        }


        // Event listener to close the dialog
        closeButton.addEventListener('click', function () {
            dialog.close();
        });
  