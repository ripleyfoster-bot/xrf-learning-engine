/* Offline cache. Same in every course: the file list and cache name come from course.js.
   Updates: the page registers this file as sw.js?v=<course version>-<engine version>, so a new
   course or engine version is a new address and every browser (Safari included) installs it. */
importScripts('course.js', '../../engine/version.js', '../../engine/sw-core.js');
